export const reverseSafe = <T>(arr?: T[]) => (arr ? [...arr].reverse() : []);
