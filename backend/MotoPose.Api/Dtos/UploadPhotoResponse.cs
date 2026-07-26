namespace MotoPose.Api.Dtos
{
    public class UploadPhotoResponse
    {
        public string FileName { get; set; } = string.Empty;
        public string OriginalFileName { get; set; } = string.Empty;
        public string RiderName { get; set; } = string.Empty;
        public string Notes { get; set; } = string.Empty;
        public string FileUrl { get; set; } = string.Empty;
    }
}