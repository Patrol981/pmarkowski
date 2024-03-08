const programmerTraits = `
public class Patryk : Programmer {
  public Patryk() : base() {
    var traits = new string[] {
      "Agile",
      "Scrum",
      "Git",
      "Teamworking",
      "AHA",
      "SOLID"
    };

    _traits.AddRange([.. traits]);
  }
}
`;

export default programmerTraits;