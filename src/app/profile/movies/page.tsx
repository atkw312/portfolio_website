import RecommendationGrid from '../components/recommendation-grid';
import { movies } from './movie_constants';

export default function Page() {
  return <RecommendationGrid categories={movies} />;
}
