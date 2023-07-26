function resumeOpen(){
    if (en) {
      var docLocation = 'cv/BalintVassCV_EN.pdf';
      window.open(docLocation,"resizeable,scrollbar"); 
    } else if (!en) {
      var docLocation = 'cv/VassBalintCV_HU.pdf';
      window.open(docLocation,"resizeable,scrollbar"); 
    }
  }