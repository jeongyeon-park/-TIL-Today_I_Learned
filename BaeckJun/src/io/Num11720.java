package io;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Num11720 {
	public static void main(String[] args) throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int total = Integer.parseInt(br.readLine());
		String s = br.readLine();
		String[] numlist = s.split("", total);
		int sum=0;
		for( String num : numlist) {
			System.out.println(num);
			sum+=Integer.parseInt(num);
		}
		System.out.println(sum);
	}
}
