export type Gender = 'male' | 'female';

export interface Profile{
    name: string;
    email: string;
    phone: string;
    gender: Gender;
    age: number;
    isMarried: boolean;
}

export const getWelcomeMessage = (prof: Profile) :string => `${prof.name}, welcome!!`;