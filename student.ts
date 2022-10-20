export class Student {
    private _name: string;
    private _group: string;
    private _score1: number;
    private _score2: number;
    private _averageScore: number

    constructor(name: string, group: string, score1: number, score2: number) {
        this._name = name;
        this._group = group;
        this._score1 = score1;
        this._score2 = score2;
        this._averageScore = (this._score1 + this._score2) / 2
    }

    get averageScore(): number {
        return this._averageScore;
    }

    set averageScore(value: number) {
        this._averageScore = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get group(): string {
        return this._group;
    }

    set group(value: string) {
        this._group = value;
    }

    get score1(): number {
        return this._score1;
    }

    set score1(value: number) {
        this._score1 = value;
    }

    get score2(): number {
        return this._score2;
    }

    set score2(value: number) {
        this._score2 = value;
    }
}

