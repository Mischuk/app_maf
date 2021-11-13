export const toggleInArray = <T>(array: T[], ...values: T[]) => {
    let result = [...array];
    if (values.length === 0) return [];
    values.forEach((value) => {
        if (array.includes(value)) {
            result = result.filter((item) => item !== value);
        } else {
            result = [...result, value];
        }
    });
    return result;
}

export function shuffle<T>(array: T[]) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }