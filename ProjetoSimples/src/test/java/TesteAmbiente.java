import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteAmbiente {
	
	public static void main(String[] args) {
		System.setProperty("webdriver.chrome.driver", "/Users/william.veloso/drivers/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://sampleapp.tricentis.com/101/app.php");
	}
	
}
