export function defaultToString(item) {
    if (item === null) {
        return "NULL";
    }

    else if (item === undefined) {
        return "UNDEFINED";
    }

    else {
        return `${item}`;
    }

    return item.toString();
}