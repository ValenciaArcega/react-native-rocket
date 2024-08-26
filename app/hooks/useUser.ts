import { useContext } from "react"
import { userContext } from "@/app/context/UserContext"

export function useUser() {
	const { user, setUser } = useContext(userContext)
	return { user, setUser }
}
