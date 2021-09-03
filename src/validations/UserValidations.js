const UserValidations = (values) => {
    const errors = {};

    if(!values.name || values.name === '') {
        errors.name = "Nama harus diisi";
    }

    if(!values.qty || values.qty === '') {
        errors.qty = "Quantity harus diisi";
    }

    if(!values.expiredAt || values.expiredAt === '') {
        errors.expiredAt = "Expired Date harus diisi";
    }
    
    return errors;
};

export default UserValidations
