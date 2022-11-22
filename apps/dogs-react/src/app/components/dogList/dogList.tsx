import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { fetchDogs } from '../../api/dogsApi';
import './dogList.scss';

export function DogList() {
  //useQuery is a hook from react query
  const { data, status, error } = useQuery({
    queryKey: ['dogs'],
    queryFn: () => fetchDogs(),
  });

  //loading/error does not seem to be working, I will have to look in to it
  if (status === 'loading') return <>Loading...</>;
  if (error) return <>An error has occurred: + {error}</>;

  return (
    <div className="box">
      <ul>
        {data &&
          data.length > 0 &&
          data?.map((x) => (
            <li key={x.id}>
              <Link to={x.id}>
                {x.name} {x.breed}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
