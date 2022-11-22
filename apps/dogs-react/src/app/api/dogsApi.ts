import { Dog } from '../models/dog';
/**
 * Function for fetching dogs
 * @returns Dogs
 */
export async function fetchDogs(): Promise<Dog[]> {
  const response = await fetch('http://localhost:3333/api/dogs');
  return response.json();
}

/**
 * Function for fetching a dog by id
 * @returns Dog
 */
export async function fetchDog(id: string): Promise<Dog> {
  const response = await fetch('http://localhost:3333/api/dogs/' + id);
  return response.json();
}