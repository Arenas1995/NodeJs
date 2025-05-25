export const getAge = (birthDate: string) => {
    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}
