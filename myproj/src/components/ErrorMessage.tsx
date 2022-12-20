interface ErrorMessageProps {
    error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <p className='text-center'>{error}</p>
    )

}