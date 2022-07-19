#!/bin/sh
clock() {
    date | awk '{ print $6,$1,$2,$3,$4 }'
}
battery() {
    #cat /sys/class/power_supply/BAT0/capacity && cat /sys/class/power_supply/BAT0/status
	sb-battery
}
ram() {
	free -h | awk '/^Mem:/ {print $3 "/" $2}'
}
temp() {
    sensors | awk '/^temp1/ {print $2}'
}
audio() {
	awk -F"[][]" '/Left:/ { print $2 }' <(amixer sget Master)
}
while true; do
    BAR_INPUT="%{l} $(battery)% | $(ram) | $(temp) | VOL: 45%"
	DATE_INPUT="%{r} $(clock)"
	echo $BAR_INPUT $DATE_INPUT
    sleep 2
done
