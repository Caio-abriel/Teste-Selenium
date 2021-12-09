package br.ce.wcaquino.runners;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features/movimentacao.feature",
		glue = {"br.ce.wcaquino.steps"},
		tags = {"@funcionais"},
		plugin = {"pretty", "html:target/report-html", "json:target/report.json"},
		monochrome = true,
		dryRun = false,
		strict = false
		)

public class Runner{
	
}
