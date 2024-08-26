import { useUser } from "../hooks/useUser"
import { RouterNoSession } from "./RouterNoSession"
import { RouterSession } from "./RouterSession"

export default function Router() {
	const { user } = useUser()

	if (!user) {
		return <RouterNoSession />
	} else {
		return <RouterSession />
	}
}
