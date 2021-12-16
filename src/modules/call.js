const call = () => {
  const modal = document.querySelector(".modal-callback")
  const cover = ddocument.querySelector(".modal-overlay")
  const body = document.querySelector("body")
  

  const displayBlock = () => {
      modal.style.display = 'block';
      cover.style.display = 'block';
    }

  const displayClose = () => {
      modal.style.display = 'none';
      cover.style.display = 'none';
    }

  body.addEventListener('click', (e) => {
      let target = e.target;
      if (target.closest('#call') || target.matches('.button-services')) {
        displayBlock();
      } else
        if (target.closest('.modal-close') || target.closest('.modal-overlay ')) {
          displayClose();
        }
    })
  }



export default call

