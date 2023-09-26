namespace TodoApi
{
    public class TodoItemDTO
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public bool IsDone { get; set; }
        public bool IsPriority { get; set; }

        public TodoItemDTO() { }
        public TodoItemDTO(Todo todoItem) =>
        (Id, Name, IsDone, IsPriority) = (todoItem.Id, todoItem.Name, todoItem.IsDone, todoItem.IsPriority);
    }
}
