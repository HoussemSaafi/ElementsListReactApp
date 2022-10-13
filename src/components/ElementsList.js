import ModalDialog from "./ModalDialog";




const ElementsList = ({ elements, togglePopup, isOpen, html }) => {

  return (
    <ul className="allElements">
      {elements.map((t) => (
        <li className="singleElement">
          <span className="elementText" key={t.id}>
            {t.name}
          </span>
            <input
                type="button"
                value="Show"
                onClick={()=> togglePopup(t.id)}
            />
            {isOpen && <ModalDialog
                content={
                html
                }
                handleClose={()=>togglePopup(t.id)}
            />}
        </li>

      ))}
          </ul>
  );
};

export default ElementsList;
