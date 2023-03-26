export const Greet = ({ name }: { name?: string }) => {
    return (
        <div className="jo">{name ? `Greet, ${name}!` : 'Greet'}</div>
    )
}
