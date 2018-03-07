var board = {
    name: 'Kanban Board',
    createColumn: function(column) {
        this.element.append(column.element);
        initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column').click(function() {
    var columnName = prompt('Enter a column name');
    if(columnName.length > 0) {
    $.ajax({
        url: baseUrl + '/column',
    	method: 'POST',
    	data: {
            name: columnName
    	},
    	success: function(response) {
    		var column = new Column(response.id, columnName);
            board.createColumn(column);
        }
    });
    } else {
        alert('Enter column name');
    }
});
	
function initSortable() {
    $('.card-list').sortable({
        connectWith: '.card-list',
        placeholder: 'card-placeholder'
    }).disableSelection();
}