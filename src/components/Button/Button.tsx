import type { Color } from "../../@types/components"

interface Props {
    children: any
    color: Color
}

const buttonColors: Record<Color, string> = {
    glass: "bg-glass text-white border-white border hover:bg-glass-bright",
    primary: "bg-primary",
    secondary: "bg-secondary"
}

export default function Button({children, color = "primary"}: Props) {
    return (
        <button type="button" className={`${buttonColors[color]} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none`}>
            {children}
        </button>
    )
}