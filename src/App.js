import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {

    //1. 데이터를 담을 공간 useState 함수사용
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)

    //3. 네트워킹 함수 axios이용
    const getData = async () => {
        return (
            await axios.get('https://api.themoviedb.org/3/movie/464052?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US')
                // .then(movie => console.log(movie.data.genres)) 네트워킹 정보출력 확인
                .then(movie => {
                    setMovie(movie.data)
                    setLoading(false)
                })
                .catch(err => console.log(err))

        )
    }





    //2. 자동실행 함수 useEffect 함수 사용
    useEffect(() => {
        getData()
    },{})

    return (
        <>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            :  (
                        <div>

                                <h1>{movie.original_title}</h1>
                                <h2>{movie.overview}</h2>
                                {movie.production_companies.map(production_companies => (
                                    <h3>{production_companies.name}</h3>
                                        ))}

                                    </div>


                )}
            }

        </>

    );
};

export default App;
