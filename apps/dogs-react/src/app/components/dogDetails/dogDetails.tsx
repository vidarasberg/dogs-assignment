import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchDog } from '../../api/dogsApi';
import './dogDetails.scss';

export function DogDetails() {
  // hook that get value from url, I decieded to do this in case
  // someone wants to send a link
  const { dogId } = useParams();

  const { data, status, error } = useQuery({
    queryKey: ['dogs'],
    queryFn: () => fetchDog(dogId ?? ''),
  });

  //loading/error does not seem to be working, I will have to look in to it
  if (status === 'loading') return <>Loading...</>;
  if (error) return <>An error has occurred: + {error}</>;

  return (
    <>
      <h2>{data?.name}</h2>
      <div className="center">
        <img src={data?.photoUrl} alt="Doggie"></img>
      </div>
      <div className="center">
        <ul>
          <li>Breed: {data?.breed}</li>
          <li>Age: {data?.age}</li>
          <li>Gender: {data?.gender}</li>
        </ul>
      </div>
      <nav className="center">
        <Link to="/dogs">Back to dogs</Link>
      </nav>
    </>
  );
}
