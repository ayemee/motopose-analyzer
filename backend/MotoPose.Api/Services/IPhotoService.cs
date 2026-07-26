using MotoPose.Api.Dtos;

namespace MotoPose.Api.Services;

public interface IPhotoService
{
    Task<UploadPhotoResponse> UploadPhotoAsync (
        UploadPhotoRequest request
    );
}