 public class PhotoRepository : IPhotoRepository
 {
     private readonly MotoPoseDbContext _dbContext;

    public PhotoRepository(MotoPoseDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task AddPhotoAsync(Photo photo)
    {
        _dbContext.Photos.Add(photo);
        await _dbContext.SaveChangesAsync();
    }
 }