using System.ComponentModel.DataAnnotations;

namespace LawyerManagementAPI.Models
{

    public class Lawyer
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Seniority { get; set; }

        [Required]
        public string Street { get; set; }

        [Required]
        public string Neighborhood { get; set; }

        [Required]
        public string State { get; set; }

        [Required]
        [RegularExpression(@"^\d{5}-\d{3}$", ErrorMessage = "CEP inválido.")]
        public string ZipCode { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Número deve ser positivo.")]
        public int Number { get; set; }

        public string? Complement { get; set; }
    }
}
