/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {userid: '1', title: 'Quantum Physics Theory', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed. Quam elementum pulvinar etiam non. Ut etiam sit amet nisl purus in mollis nunc. Quam id leo in vitae turpis. Convallis a cras semper auctor neque vitae. Condimentum mattis pellentesque id nibh. Mattis molestie a iaculis at erat pellentesque adipiscing. Ut lectus arcu bibendum at varius vel pharetra vel. Tortor consequat id porta nibh venenatis cras sed felis. Id consectetur purus ut faucibus. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Odio pellentesque diam volutpat commodo sed egestas egestas. Id semper risus in hendrerit gravida rutrum. Neque sodales ut etiam sit. Sed vulputate mi sit amet mauris commodo quis imperdiet. Mattis rhoncus urna neque viverra justo nec.'},

    {userid: '1', title: 'Quantum Computing ', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi sit amet mauris commodo quis. Magna eget est lorem ipsum dolor. Amet tellus cras adipiscing enim eu turpis egestas pretium aenean. Id diam maecenas ultricies mi. Lorem sed risus ultricies tristique nulla. Rhoncus urna neque viverra justo nec ultrices dui. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Urna id volutpat lacus laoreet non curabitur gravida arcu. Lectus sit amet est placerat. Sagittis id consectetur purus ut faucibus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Quam nulla porttitor massa id. Pretium quam vulputate dignissim suspendisse in est ante. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Nisl nisi scelerisque eu ultrices vitae auctor. Sed odio morbi quis commodo odio aenean sed adipiscing. Arcu non odio euismod lacinia at.' },

<<<<<<< HEAD:seeds/2.posts.js

    {
      userid: 1,
      title: "Dark Matter Theory",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet nisl. Velit ut tortor pretium viverra suspendisse. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Proin sed libero enim sed faucibus turpis in eu. Proin nibh nisl condimentum id venenatis. Lacus sed viverra tellus in. Cursus euismod quis viverra nibh cras pulvinar mattis. Eros in cursus turpis massa tincidunt dui ut. Eleifend mi in nulla posuere. Magna ac placerat vestibulum lectus mauris ultrices eros. Morbi non arcu risus quis varius quam quisque. In hac habitasse platea dictumst quisque sagittis purus. Sit amet dictum sit amet justo donec enim. Sed augue lacus viverra vitae congue eu. Amet cursus sit amet dictum. Feugiat scelerisque varius morbi enim nunc faucibus a.",
    },

=======
    {userid: '1', title: 'Dark Matter Theory', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem nulla pharetra diam sit amet nisl. Velit ut tortor pretium viverra suspendisse. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Tempor nec feugiat nisl pretium fusce id velit ut tortor. Proin sed libero enim sed faucibus turpis in eu. Proin nibh nisl condimentum id venenatis. Lacus sed viverra tellus in. Cursus euismod quis viverra nibh cras pulvinar mattis. Eros in cursus turpis massa tincidunt dui ut. Eleifend mi in nulla posuere. Magna ac placerat vestibulum lectus mauris ultrices eros. Morbi non arcu risus quis varius quam quisque. In hac habitasse platea dictumst quisque sagittis purus. Sit amet dictum sit amet justo donec enim. Sed augue lacus viverra vitae congue eu. Amet cursus sit amet dictum. Feugiat scelerisque varius morbi enim nunc faucibus a.' },
 
>>>>>>> parent of 19a131a (make it better):seeds/bposts.js
  ]);
};
