package io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num10951 {
	public static void main(String[] args) {
		try {
			//예외처리 필수 
			// 콘솔에서 입력 받을 때 //InputStreamReader(System.in)
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			String s = "";
			
			while((s =br.readLine())!=null) {
				StringTokenizer token = new StringTokenizer(s);
				int a = Integer.parseInt(token.nextToken());
				int b = Integer.parseInt(token.nextToken());
				System.out.println(a+b);
				
			}
			br.close();
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
}
