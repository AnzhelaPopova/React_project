1. будет отрисован компонент <Users />
2. gоявится "Моя личная страница"
3. item, index, array.
4. через fılter
5. import { useLocation } from 'react-router-dom';
6. В элементе указывается реакт компонент, в children передаются jsx элементы
7. Exact – строгая проверка на совпадения
8. useMatch позволяет узнать совпадение маршрута с путем
   useLocation предоставляет доступ к объекту location, содержащему информацию об url и его параметров.
   Хук useNavigate предоставляет функцию для перехода на другой маршрут в приложении. Это позволяет управлять навигацией в React приложении без использования Link
9. рекомендуется использовать redirect, loaders and actions вместо хука useNavigate

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Component() {
const navigate = useNavigate();

const handleButtonClick = () => {
navigate('/other-page');
};

return (

<div>
<button onClick={handleButtonClick}>Other Page</button>

</div>
  );
}
export default Component;
