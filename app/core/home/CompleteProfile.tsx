import { KeyboardScroll } from "@/app/components/KeyboardScroll";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";
import { AvoiderKeyboard } from "../../components/AvoiderKeyboard";
import { btnBase, labelInp, txtBtnBase, txtSecondary, wrView } from "@/app/utils/tw-ui";
import { CustomLinearGradient } from "@/app/components/Gradients";
import { FontAwesome } from "@expo/vector-icons";

const days = [
	{ ID_DIA: 1, D_DIA: 'L' },
	{ ID_DIA: 2, D_DIA: 'M' },
	{ ID_DIA: 3, D_DIA: 'M' },
	{ ID_DIA: 4, D_DIA: 'J' },
	{ ID_DIA: 5, D_DIA: 'V' },
	{ ID_DIA: 6, D_DIA: 'S' },
	{ ID_DIA: 7, D_DIA: 'D' },
];
const daysMap = {
	1: 'Lunes',
	2: 'Martes',
	3: 'Miércoles',
	4: 'Jueves',
	5: 'Viernes',
	6: 'Sábado',
	7: 'Domingo'
};

const HC_GOALS = [
	{
		ID_GOAL: 1,
		D_GOAL: 'Ganancia muscular',
		IMG: require('@/assets/img/home/hypertropy.png')
	},
	{
		ID_GOAL: 2,
		D_GOAL: 'Fuerza',
		IMG: require('@/assets/img/home/strength.png')
	},
	{
		ID_GOAL: 3,
		D_GOAL: 'Resistencia',
		IMG: require('@/assets/img/home/resistence.png')
	},
	{
		ID_GOAL: 4,
		D_GOAL: 'Pasatiempo',
		IMG: require('@/assets/img/home/health.png')
	},
	{
		ID_GOAL: 5,
		D_GOAL: 'Condición Física',
		IMG: require('@/assets/img/home/running.png')
	},
]

const HC_MUSCLES = [
	{ ID_MUSCLE: 1, D_MUSCLE: "Cuádricep" },
	{ ID_MUSCLE: 2, D_MUSCLE: "Femoral" },
	{ ID_MUSCLE: 3, D_MUSCLE: "Glúteo" },
	{ ID_MUSCLE: 4, D_MUSCLE: "Pantorrilla" },
	{ ID_MUSCLE: 5, D_MUSCLE: "Abdominales" },
	{ ID_MUSCLE: 6, D_MUSCLE: "Trícep" },
	{ ID_MUSCLE: 7, D_MUSCLE: "Bícep" },
	{ ID_MUSCLE: 8, D_MUSCLE: "Pectoral" },
	{ ID_MUSCLE: 9, D_MUSCLE: "Espalda" },
	{ ID_MUSCLE: 10, D_MUSCLE: "Hombro" },
]

export function CompleteProfile() {
	const [selectedMuscles, setSelectedMuscles] = useState<number[]>([]);
	const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5]);
	const [schedule, setSchedule] = useState<string>(null)

	useEffect(() => {
		// getTypeOfBranch()
	}, [])

	useEffect(() => {
		let result = '';

		const weekdays = [1, 2, 3, 4, 5]
		const weekends = [6, 7]

		const isWeekdaysSelected = weekdays.every(day => selectedDays.includes(day));
		const isWeekendsSelected = weekends.every(day => selectedDays.includes(day));

		if (isWeekdaysSelected && selectedDays.length === 5) {
			setSchedule('Entre semana')
		} else if (isWeekendsSelected && selectedDays.length === 2) {
			setSchedule('Fines de semana')
		} else if (isWeekendsSelected && isWeekdaysSelected && selectedDays.length === 7) {
			setSchedule("Toda la semana")
		} else {
			const selectedDaysNames = selectedDays.map(day => daysMap[day]);
			setSchedule(selectedDaysNames.join(', '))
		}
	}, [selectedDays]);
	/**
	 * @multipleIds
	 * Once the user wanna choose more than one option
	 * and fill the array with those selected ID's
	 */
	const toggleTypeMuscles_onPress = function (id: number) {
		setSelectedMuscles(prevSelected => {
			if (prevSelected.includes(id)) {
				return prevSelected.filter(selectedId => selectedId !== id);
			} else {
				return [...prevSelected, id];
			}
		});
	}

	/**
	 * Allows to add or remove ID's to the
	 * days state to conditionaly render a background
	 * @param {number} dayId to store/remove onto the array.
	 */
	const toggleDays_onPress = function (id: number) {
		setSelectedDays(prevSelected => {
			if (prevSelected.includes(id)) {
				return prevSelected.filter(selectedId => selectedId !== id);
			} else {
				return [...prevSelected, id];
			}
		})
	}

	const [selectedGoal, setSelectedGoal] = useState<number>(null);

	return <View className={wrView}>
		<AvoiderKeyboard>
			<Text className={labelInp + " px-4"}>¿Cúal es tu objetivo?</Text>
			<ScrollView
				style={{ paddingVertical: 12 }}
				contentContainerStyle={{ paddingRight: 16 }}
				horizontal={true} showsHorizontalScrollIndicator={false}>
				{HC_GOALS.map(item => <Pressable
					key={item.ID_GOAL}
					onPress={() => setSelectedGoal(item.ID_GOAL)}
					className={`bg-gray-100 dark:bg-gray-700 ml-4 rounded-[16px] border-4 ${selectedGoal == item.ID_GOAL ? "border-p600 dark:border-p500" : "border-transparent"}`}>
					<Image
						className="w-[172px] h-[212px]"
						source={item.IMG} />
					<Text className="text-xl mx-2 mb-2 text-center dark:text-p100">
						{item.D_GOAL}</Text>
				</Pressable>)}
			</ScrollView>

			<View className="px-4 mt-6">
				<View className="py-5 border-y-2 border-y-gray-200 dark:border-y-gray-600">
					<Text className={labelInp + " mt-0 text-base"}>
						{selectedDays.length == 1 ? "Día" : "Días"} de entrenamiento:{" "}
						<Text className={`text-p500 text-base mt-2 dark:text-p300 ${!schedule && "text-red-600 dark:text-red-400"}`}>
							{schedule ? schedule : "Selecciona al menos un día"}</Text>.
					</Text>
					<View className="flex-row flex-wrap py-2 w-full items-center justify-between mt-2">
						{days.map((item) => (
							<Pressable
								key={item.ID_DIA}
								onPress={() => toggleDays_onPress(item.ID_DIA)}
								className={`h-12 w-12 rounded-full justify-center items-center ${selectedDays.includes(item.ID_DIA)
									? 'bg-p400 dark:bg-p800'
									: 'bg-gray-200 dark:bg-gray-600'
									}`}>
								<Text className="text-black dark:text-white text-[19px]">
									{item.D_DIA}
								</Text>
							</Pressable>
						))}
					</View>
				</View>

				<Text className={labelInp}>
					Musculos objetivos</Text>
				<Text className={txtSecondary + " mt-1"}>
					Puedes seleccionar más de uno para un mejor análisis</Text>
				<View className="mt-2 flex-row flex-wrap">
					{HC_MUSCLES.map(item => <Pressable
						key={item.ID_MUSCLE}
						onPress={() => toggleTypeMuscles_onPress(item.ID_MUSCLE)}
						className={`rounded-lg mt-3 mr-3 py-1 px-3 ${selectedMuscles.includes(item.ID_MUSCLE) ? "bg-p300 dark:bg-p800" : "bg-gray-200 dark:bg-gray-800"}`}
					>
						<Text className="text-black dark:text-white text-[19px]">
							{item.D_MUSCLE}</Text>
					</Pressable>)}
				</View>

				<Pressable className={btnBase}>
					<CustomLinearGradient>
						<FontAwesome name="send" size={20} color="#f2f2f7" />
						<Text className={txtBtnBase}>Enviar Datos</Text>
						{/* <ActivityIndicator size="small" color="white" /> */}
					</CustomLinearGradient>
				</Pressable>
			</View>
		</AvoiderKeyboard>
	</View>
}
