import { 
  FiCode, FiType, FiImage, FiSquare, 
  FiList, FiLayout, FiCrop, FiBox, 
  FiRotateCcw, FiActivity, FiDroplet
} from 'react-icons/fi';

export const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'selectors': return <FiCode size={16} />;
    case 'text': return <FiType size={16} />;
    case 'background': return <FiImage size={16} />;
    case 'borders': return <FiSquare size={16} />;
    case 'lists': return <FiList size={16} />;
    case 'tables': return <FiLayout size={16} />;
    case 'filters': return <FiCrop size={16} />;
    case 'box': return <FiBox size={16} />;
    case 'transform': return <FiRotateCcw size={16} />;
    case 'animation': return <FiActivity size={16} />;
    default: return <FiDroplet size={16} />;
  }
};
