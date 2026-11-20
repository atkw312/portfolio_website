import RecommendationGrid from '../components/recommendation-grid';
import { tvshows } from './tv_constants';

export default function Page() {
  return <RecommendationGrid categories={tvshows} />;
}
