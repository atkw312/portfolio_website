import RecommendationGrid from '../components/recommendation-grid';
import { music } from './music_constants';

export default function Page() {
  return <RecommendationGrid categories={music} square />;
}
