var TodoBox = React.createClass({
    getInitialState: function () {
        return {
            data:[
                {"id" : "0001", "task" : "have breakfast", "isFinished" : "false" },
                {"id" : "0002", "task" :  "go to bed", "isFinished" : "false"},
                {"id" : "0003", "task" : "play the computer game", "isFinished" : "true"},
            ]
        };
    },

    //delete a task
    handleTaskDelete: function (taskId) {
        var data = this.state.data;
        data = data.filter(function (task) {
            return task.id !== taskId;
        });
        this.setState({data});
    },
    //change state of task
    handleToggleComplete:function (taksId) {
        var data = this.state.data;
        for(var i in data){
            if (data[i].id === taksId){
                data[i].isFinished = data[i].isFinished === "true" ? "false" : "true";
                break;
            }
        }
        this.setState({data});
    },
    //generate a random id for new task
    generateId:function () {
        return Math.floor(Math.random()*9000)+1000;
    },
    //add a new task
    handleSubmit:function (task) {
        var data = this.state.data;
        var id = this.generateId();
        var isFinished = "false";
        data = data.concat([{"id" : id, "task" : task, "isFinished" : "false"}]);
        this.setState({data});
    },

    render: function () {
        var statistics = {
            todoCount:this.state.data.length||0,
            todoCompleteCount:this.state.data.filter(function (item) {
                return item.isFinished === "true";
            }).length
        };

        return(
            <div className="well">
                <h1 className="text-center">Todo List</h1>
                <TodoList data={this.state.data}
                deleteTask={this.handleTaskDelete}
                toggleComplete={this.handleToggleComplete}
                todoCount={statistics.todoCount}
                todoCompleteCount={statistics.todoCompleteCount}
                />
                <TodoForm submitTask={this.handleSubmit}/>
            </div>
        )
    }
});

var TodoList = React.createClass({
    render: function () {
        var taskList = this.props.data.map(function (listItem) {
            return(
                <TodoItem
            taskId={listItem.id}
            key={listItem.id}
            task={listItem.task}
            isFinished={listItem.isFinished}
            deleteTask={this.props.deleteTask}
            toggleComplete={this.props.toggleComplete}/>
            )
        },this);

        return(
            <ul className="list-group">
                {taskList}
                <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount}/>
            </ul>
        );
    }
});

var TodoItem = React.createClass({
    toggleComplete:  function () {
        this.props.toggleComplete(this.props.taskId);
    },
    deleteTask: function () {
        this.props.deleteTask(this.props.taskId);
    },
    handleMouseOver:function () {
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display = "inline";
    },
    handleMouseOut:function () {
        ReactDOM.findDOMNode(this.refs.deleteBtn).style.display ="none";
    },

    render:function () {
        var task = this.props.task;
        var classes = "list-group-item";
        var itemChecked;
        if (this.props.isFinished === "true"){
            task = <s>{task}</s>;
            itemChecked = true;
            classes += " list-group-item-success"
        }else{
            itemChecked = false;
        }

        return(
            <li className={classes} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete} className="pull-left"/>
                {task}
                <div className="pull-right">
                    <button type="button" className="btn btn-xs close" onClick={this.deleteTask} ref="deleteBtn">删除</button>
                </div>
            </li>
        );
    }
});

var TodoFooter = React.createClass({
    render :function () {
        return(
            <li className="list-group-item">{this.props.todoCompleteCount}已完成 / {this.props.todoCount}总数</li>
        )
    }
});

var TodoForm = React.createClass({
    submitTask:function (e) {
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        if(!task){
            return;
        }
        this.props.submitTask(task);
        ReactDOM.findDOMNode(this.refs.task).value="";
    },

    render: function() {
        return (
            <div>
                <hr />
                <form className="form-horizontal" onSubmit={this.submitTask}>
                    <div className="form-group">
                        <label for="task" className="col-md-2 control-label">Task</label>
                        <div className="col-md-10">
                            <input type="text" id="task" ref="task" className="form-control" placeholder="你想做点什么"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <input type="submit" value="Save Task" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    <TodoBox />,
    document.getElementById('todoBox')
);