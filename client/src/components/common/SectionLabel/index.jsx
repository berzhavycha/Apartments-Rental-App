export const SectionLabel = ({ emoji, label }) => {
    return (
        <div className="flex items-center">
            <span className="text-lg mr-2">{emoji}</span>
            <span className="text-2xl font-semibold">{label}</span>
        </div>
    )
}
