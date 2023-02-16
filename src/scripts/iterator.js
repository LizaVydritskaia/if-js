const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.currentIndex === undefined) {
      this.currentIndex = 0;
    }

    if (this.currentIndex < this.data.length) {
      return {
        value: this.data[this.currentIndex++],
        done: false,
      };
    }

    if (this.currentIndex === this.data.length) {
      this.currentIndex = 0;
    }
  },
};

const changeStyle = (id) => (event) => {
  event.target.style.color = colors.next(id).value;
};

const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');

text4.addEventListener('click', changeStyle(text4));
text5.addEventListener('click', changeStyle(text5));
text6.addEventListener('click', changeStyle(text6));
