export default {
  props: {
    text: {
      require: true,
      type: String
    }
  },
  //   render(createElement) {
  //     return createElement(
  //       'div',
  //       {
  //         style: {
  //           width: '1rem',
  //           height: '1rem',
  //           background: 'red',
  //           'border-radus': '50%'
  //         },
  //         'class': {
  //           foo: true
  //         },
  //         attrs: {
  //           id: 'foo'
  //         },
  //         on: {
  //           click: function() {
  //             console.log(11111);
  //           }
  //         }
  //       },
  //       this.text
  //     );
  //   }
  render(h) {
    var newP = () => h('p', 'hello');
    return h('div', [newP(), newP()]);
  }
};
