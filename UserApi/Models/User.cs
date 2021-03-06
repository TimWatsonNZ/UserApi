using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UserApi.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string id { get; set; }
        public string email { get;set; }
        public string firstName { get; set; }
        public string lastName { get;set; }
        public string title { get; set; }
        public DateTime dateOfBirth { get; set; }
        public string phoneNumber { get; set;}
        public string imageUrl { get; set; }
        public string thumbnailUrl { get; set; }
    }
}
