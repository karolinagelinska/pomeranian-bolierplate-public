import './styles.css';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../Components/NotFound/NotFound';

export const MyCV = () => {
  return (
    <Routes>
      <Route path="" element={<MyCVLayout />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
function MyCVLayout() {
  return <div></div>;
}
