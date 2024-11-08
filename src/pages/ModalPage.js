import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
        elit nibh. Etiam nec mollis nunc, vitae posuere metus. Donec elementum
        leo sed leo sollicitudin viverra. Maecenas quis ante nec enim ultricies
        sollicitudin vel nec nisl. Morbi consectetur neque vestibulum sapien
        iaculis eleifend. Etiam in metus posuere, interdum lacus in, ullamcorper
        nisi. Pellentesque dolor velit, placerat sit amet eros id, porta aliquet
        lacus. Donec sodales rutrum ante. Fusce eget dolor id lacus interdum
        tristique. Cras convallis convallis purus sit amet rhoncus.
      </p>
    </div>
  );
}

export default ModalPage;
