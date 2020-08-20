package dp;

import java.util.Scanner;

public class Num1463 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int num = scanner.nextInt();
		int total=0;
		
		while(num!=1) {
			if(num%3==0) {
				num=num/3;
				total++;
			}
			else if(num%2==0 && num!=10) {
				num=num/2;
				total++;
			}
			else {
				num--;
				total++;
			}
		}
		System.out.println(total);
	}
}
