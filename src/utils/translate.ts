export const translate = (s?: string) => {
    if (!s) {
        return;
    }
    const dict: Record<string, string> = {
        "Please enter valid credentials": "Неправильный логин или пароль"
    };
    if (dict.hasOwnProperty(s)) {
        return dict[s];
    }
    return s;
}