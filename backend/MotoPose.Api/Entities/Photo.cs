public class Photo
{
    public int Id { get; set; }

    public required string OriginalFileName { get; set; }
    public required string FileName { get; set; }
    public required string RiderName { get; set; }

    public DateTime DateUploaded { get; set; }

    public string? Notes { get; set; }
}