package com.abhi.configuration;



import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
	@Bean
	public Docket empApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("com.abhi"))
				.paths(PathSelectors.any())
				.build()
				.apiInfo(metaData());
	}

	private ApiInfo metaData() {
		// TODO Auto-generated method stub
		return new ApiInfoBuilder()
				.title("Department And Employee List with spring boot")
				.description("\"Swagger configuration \"")
				.version("1.1.0")
				.license("Apache 2.0")
				.licenseUrl("https://www.apche.org/license.html")
				.contact(new Contact("Abhijeet Patil", "https://www.linkedin.com/in/abhijeet-patil-b66233217", "abhipatil6882@gmail.com"))
				.build();
	}
}

