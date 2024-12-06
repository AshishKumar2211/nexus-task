const InputComponent = ({name, text, placeholder, required = true}) => {
    return (
        <>
            <label htmlFor={name}>{text}</label>
            <input name={name} id={name} type={name} placeholder={placeholder} required={required} />
        </>
    );
};

export default InputComponent;