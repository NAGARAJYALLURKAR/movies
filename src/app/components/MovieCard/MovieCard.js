import styles from './movieCard.module.css'

const MovieCard = (probs) => {
    let {movie} = probs
  return <div className={styles.container}>
            <div className={styles.image}>
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className={styles.content} >
                <p className={styles.year}>{movie.Year}</p>
                <p className={styles.title}>{movie.Title}</p>
            </div>
        </div>
  
}

export default MovieCard