var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var todo = this.refs.todoText.value;

    if (todo.length >0){
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
        <div>
          <form ref="newTodo" onSubmit={this.onSubmit}>
            <input type="text" ref="todoText" placeholder="Enter New To Do"/>
            <button className="button expanded">Enter</button>
          </form>
        </div>
    );
  }
});

module.exports = AddTodo;
