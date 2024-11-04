using Microsoft.Playwright.NUnit;
using Microsoft.Playwright;

[Parallelizable(ParallelScope.Self)]
[TestFixture]
public class Tests : PageTest
{
    [Test]
    public async Task MyTest()
    {
        await Page.GotoAsync("https://testautomationpractice.blogspot.com/");
        await Page.GetByPlaceholder("Enter Name").FillAsync("Thivaakar");
        await Page.GetByPlaceholder("Enter EMail").FillAsync("thivakar1@gmail.com");
        await Page.GetByPlaceholder("Enter Phone").FillAsync("8123456789");
        await Page.GetByLabel("Female").CheckAsync();
        await Page.GetByLabel("Country:").SelectOptionAsync(new[] { "india" });
    }
}
