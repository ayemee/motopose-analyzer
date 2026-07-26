namespace MotoPose.Api.Dtos
{
    public class UploadPhotoRequest
    {
        public IFormFile File { get; set; } = default!;
        public string RiderName { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
    }
}